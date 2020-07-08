import { NgModule, Injectable } from '@angular/core';
import {
  Routes,
  RouterModule,
  CanLoad,
  Route,
  UrlSegment,
  Router,
} from '@angular/router';
import {
  redirectLoggedInTo,
  redirectUnauthorizedTo,
  hasCustomClaim,
  AuthPipeGenerator,
  loggedIn,
} from '@angular/fire/auth-guard';
import { AngularFireAuth } from '@angular/fire/auth';
import { of, Observable, pipe } from 'rxjs';
import { take, map, switchMap } from 'rxjs/operators';

// TODO: Extract logic
// -------------------------------------------------------------------
@Injectable({
  providedIn: 'any',
})
class CustomAngularFireAuthGuard implements CanLoad {
  constructor(private auth: AngularFireAuth, private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    const authPipeFactory = route.data.authGuardPipe || (() => loggedIn);

    return this.auth.authState.pipe(
      take(1),
      authPipeFactory(),
      switchMap((can) =>
        typeof can === 'boolean'
          ? of(can)
          : this.router.navigateByUrl(this.router.createUrlTree(can as any[]))
      )
    );
  }
}

const canLoad = (authGuardPipe: AuthPipeGenerator) => ({
  canLoad: [CustomAngularFireAuthGuard],
  data: { authGuardPipe },
});
const adminOnlyOrRedirectToHome = () =>
  pipe(
    hasCustomClaim('admin'),
    map((has) => has || ['/home'])
  );
const redirectLoggedInToHome = () => redirectLoggedInTo(['/home']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);
// -----------------------------------------------------------------------------

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
    ...canLoad(redirectLoggedInToHome),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    ...canLoad(redirectUnauthorizedToLogin),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    ...canLoad(adminOnlyOrRedirectToHome),
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./Components/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./Components/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'chats',
    loadChildren: () =>
      import('./Components/chatbot/chatbot.module').then(
        (m) => m.ChatbotModule
      ),
  },
  // {
  //   path: 'analytics',
  //   loadChildren: () => import('./Components/insights/insights.module').then(m => m.InsightsModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

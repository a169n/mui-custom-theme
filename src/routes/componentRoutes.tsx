import type { ReactElement } from 'react';
import PalettePage from '../pages/foundations/PalettePage';
import TypographyPage from '../pages/foundations/TypographyPage';
import TokenUsagePage from '../pages/foundations/TokenUsagePage';
import {
  AlertPage,
  AvatarPage,
  BadgesPage,
  BannerPage,
  BreadcrumbsPage,
  ButtonsPage,
  IconButtonsPage,
  CalendarPage,
  CheckboxesPage,
  ChipsPage,
  CommandSearchPage,
  DividerPage,
  DropdownPage,
  EmptyStatesPage,
  ErrorPages,
  FileInputPage,
  FilterPage,
  FormPage,
  InputPage,
  ModalsDialogsPage,
  NavigationMenuPage,
  PaginationPage,
  ProgressPage,
  RadioPage,
  ScrollPage,
  SelectPage,
  SidebarPage,
  SkeletonPage,
  StepperPage,
  SwitchPage,
  TablePage,
  TabsPage,
  TextareaPage,
  TooltipPage,
} from '../pages/components';

export type AppRoute = {
  path: string;
  label: string;
  element: ReactElement;
  status?: 'done' | 'in-progress' | 'todo';
};

export type AppRouteGroup = {
  title: string;
  routes: AppRoute[];
};

export const foundationRoutes: AppRoute[] = [
  { path: 'palette', label: 'Palette', element: <PalettePage /> },
  { path: 'typography', label: 'Typography', element: <TypographyPage /> },
  { path: 'tokens', label: 'Token Usage', element: <TokenUsagePage /> },
];

const doneRoutes: AppRoute[] = [
  { path: 'buttons', label: 'Buttons', element: <ButtonsPage />, status: 'done' },
  { path: 'icon-buttons', label: 'Icon Buttons', element: <IconButtonsPage />, status: 'done' },
  { path: 'input', label: 'Input', element: <InputPage />, status: 'done' },
  { path: 'table', label: 'Table', element: <TablePage />, status: 'done' },
];

const inProgressRoutes: AppRoute[] = [
  { path: 'select', label: 'Select', element: <SelectPage />, status: 'in-progress' },
];

const todoRoutes: AppRoute[] = [
  { path: 'avatar', label: 'Avatar', element: <AvatarPage />, status: 'todo' },
  { path: 'alert', label: 'Alert', element: <AlertPage />, status: 'todo' },
  { path: 'badges', label: 'Badges', element: <BadgesPage /> },
  { path: 'breadcrumbs', label: 'Breadcrumbs', element: <BreadcrumbsPage /> },
  { path: 'checkboxes', label: 'Checkboxes', element: <CheckboxesPage /> },
  { path: 'chips', label: 'Chips', element: <ChipsPage /> },
  { path: 'calendar', label: 'Calendar', element: <CalendarPage /> },
  { path: 'modal-dialog', label: 'Modal, Dialog', element: <ModalsDialogsPage /> },
  { path: 'divider', label: 'Divider', element: <DividerPage /> },
  { path: 'dropdown', label: 'Dropdown', element: <DropdownPage /> },
  { path: 'empty-states', label: 'Empty States', element: <EmptyStatesPage /> },
  { path: 'errors', label: '404, 500', element: <ErrorPages /> },
  { path: 'banner', label: 'Banner', element: <BannerPage /> },
  { path: 'filter', label: 'Filter', element: <FilterPage /> },
  { path: 'navigation-menu', label: 'NavigationMenu', element: <NavigationMenuPage /> },
  { path: 'command-search', label: 'Command, Search', element: <CommandSearchPage /> },
  { path: 'skeleton', label: 'Skeleton', element: <SkeletonPage /> },
  { path: 'pagination', label: 'Pagination', element: <PaginationPage /> },
  { path: 'progress', label: 'Progress', element: <ProgressPage /> },
  { path: 'radio', label: 'Radio', element: <RadioPage /> },
  { path: 'form', label: 'Form', element: <FormPage /> },
  { path: 'sidebar', label: 'Sidebar', element: <SidebarPage /> },
  { path: 'scroll', label: 'Scroll', element: <ScrollPage /> },
  { path: 'stepper', label: 'Stepper', element: <StepperPage /> },
  { path: 'switch', label: 'Switch', element: <SwitchPage /> },
  { path: 'tabs', label: 'Tabs', element: <TabsPage /> },
  { path: 'textarea', label: 'Textarea', element: <TextareaPage /> },
  { path: 'tooltip', label: 'Tooltip', element: <TooltipPage /> },
  { path: 'file-input', label: 'File Input', element: <FileInputPage /> },
];

export const componentRoutes: AppRoute[] = [...doneRoutes, ...inProgressRoutes, ...todoRoutes];

export const routeGroups: AppRouteGroup[] = [
  { title: 'Foundations', routes: foundationRoutes },
  { title: 'Done', routes: doneRoutes },
  { title: 'In Progress', routes: inProgressRoutes },
  { title: 'To Do', routes: todoRoutes },
];

export const allRoutes = [...foundationRoutes, ...componentRoutes];

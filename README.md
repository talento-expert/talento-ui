# TalentoSharedUi

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# @talento/shared-ui

A shared UI component library for Talento projects built with Angular 18.

## 📦 Installation

Install the library in your Angular project:

```bash
npm install ../talento-shared-ui/dist/shared-ui
```

Or add it to your `package.json`:

```json
{
  "dependencies": {
    "@talento/shared-ui": "file:../talento-shared-ui/dist/shared-ui"
  }
}
```

## 🚀 Components

### Button Component

A customizable button component with multiple variants, sizes, and states.

#### Features

- **5 Type Variants**: `primary`, `secondary`, `danger`, `success`, `default`
- **3 Size Options**: `small`, `medium`, `large`
- **Loading State**: Built-in spinner animation
- **Disabled State**: Proper accessibility support
- **Full Width Option**: Responsive layout support
- **Content Projection**: Use any content inside the button

#### Basic Usage

```typescript
import { Component } from '@angular/core';
import { ButtonComponent } from '@talento/shared-ui';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <talento-button type="primary" (buttonClick)="handleClick()"> Click Me </talento-button>
  `,
})
export class ExampleComponent {
  handleClick() {
    console.log('Button clicked!');
  }
}
```

#### API Reference

**Inputs:**

| Input       | Type         | Default     | Description            |
| ----------- | ------------ | ----------- | ---------------------- |
| `type`      | `ButtonType` | `'default'` | Button style variant   |
| `size`      | `ButtonSize` | `'medium'`  | Button size            |
| `disabled`  | `boolean`    | `false`     | Disable the button     |
| `loading`   | `boolean`    | `false`     | Show loading spinner   |
| `fullWidth` | `boolean`    | `false`     | Make button full width |

**Outputs:**

| Output        | Type                  | Description                    |
| ------------- | --------------------- | ------------------------------ |
| `buttonClick` | `EventEmitter<Event>` | Emitted when button is clicked |

**Types:**

```typescript
type ButtonType = 'primary' | 'secondary' | 'danger' | 'success' | 'default';
type ButtonSize = 'small' | 'medium' | 'large';
```

#### Examples

**Primary Button**

```html
<talento-button type="primary" (buttonClick)="save()"> Save </talento-button>
```

**Secondary Button with Icon**

```html
<talento-button type="secondary" size="small">
  <i class="icon-edit"></i>
  Edit
</talento-button>
```

**Danger Button**

```html
<talento-button type="danger" (buttonClick)="delete()"> Delete </talento-button>
```

**Loading State**

```html
<talento-button type="primary" [loading]="isLoading" (buttonClick)="submit()">
  Submit
</talento-button>
```

**Disabled State**

```html
<talento-button type="primary" [disabled]="!isValid"> Continue </talento-button>
```

**Full Width**

```html
<talento-button type="primary" [fullWidth]="true" (buttonClick)="login()"> Login </talento-button>
```

**Large Success Button**

```html
<talento-button type="success" size="large" (buttonClick)="approve()"> Approve </talento-button>
```

## 🛠️ Development

### Build the Library

```bash
cd talento-shared-ui
ng build shared-ui
```

The build artifacts will be stored in `dist/shared-ui/`.

### Add New Components

```bash
ng generate component [component-name] --project=shared-ui --standalone
```

Don't forget to export the new component in `projects/shared-ui/src/public-api.ts`:

```typescript
export * from './lib/[component-name]/[component-name]';
```

### Testing

```bash
ng test shared-ui
```

## 📝 Usage in Talento Admin

After building the library, install it in the talento-admin project:

```bash
cd talento-admin
npm install ../talento-shared-ui/dist/shared-ui
```

Then import and use the components:

```typescript
import { ButtonComponent } from '@talento/shared-ui';

@Component({
  imports: [ButtonComponent],
  // ...
})
```

## 🔄 Rebuild After Changes

Whenever you make changes to the library:

1. Build the library:

   ```bash
   cd talento-shared-ui
   ng build shared-ui
   ```

2. Reinstall in consuming projects:
   ```bash
   cd talento-admin
   npm install ../talento-shared-ui/dist/shared-ui
   ```

## 📄 License

ISC

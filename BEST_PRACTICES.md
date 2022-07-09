# Best Practices

## Angular

### Topic 1

Don’t create separate variables and properties to store derived state; calculate it whenever necessary instead.

**Avoid** -

```typescript
@Component({
  selector: 'some',
  template: '<button>{{ text }}</button>'
})
export class SomeComponent {
  isAuth = false;
  text = 'Sign Out';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.authChange.subscribe((auth) => {
      this.isAuth = auth;
      this.text = this.isAuth ? 'Sign Out' : 'Sign In';
    });
  }
}
```

**Recommended** -

```typescript
@Component({
  selector: 'some',
  template: `<button>{{ isAuth ? 'Sign Out' : 'Sign In' }}</button>`
})
export class SomeComponent {
  isAuth = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.authChange.subscribe((auth) => (this.isAuth = auth));
  }
}
```

### Topic 2

Not doing data manipulations in a component - This one’s tricky. I suggest not to do that in a service either. Services are for API calls, sharing data between components and other utilities. The data manipulations instead should belong to separate model classes.

**Avoid** -

```typescript
interface Movie {
  id: number;
  title: string;
}

@Component({
  selector: 'app-some-component-with-form',
  template: `...` // our form is here
})
export class SomeComponentWithForm {
  public form: FormGroup;
  public movies: Array<Movie>;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.max(120)],
      favoriteMovies: [[]] /*
                we'll have a multiselect dropdown
                in our template to select favorite movies
                */
    });
  }

  public onSubmit(values) {
    /*
      'values' is actually a form value, which represents a user
      but imagine our API does not expect as to send a list of movie
      objects, just  a list of id-s, so we have to map the values
    */
    values.favouriteMovies = values.favouriteMovies.map((movie: Movie) => movie.id);
    // then we will send the user data to the server using some service
  }
}
```

**Recommended** -

```typescript
interface Movie {
  id: number;
  title: string;
}

interface User {
  firstName: string;
  lastName: string;
  age: number;
  favoriteMovies: Array<Movie | number>;
  /*
   notice how we supposed that this property
   may be either an Array of Movie objects
   or of numerical identifications
  */
}

class UserModel implements User {
  firstName: string;
  lastName: string;
  age: number;
  favoriteMovies: Array<Movie | number>;

  constructor(source: User) {
    this.firstName = source.firstName;
    this.lastName = source.lastName;
    this.age = source.age;
    this.favoriteMovies = source.favoriteMovies.map((movie: Movie) => movie.id);
    /*
     we moved the data manipulation to this separate class,
     which is also a valid representation of a User model,
     so no unnecessary clutter here
    */
  }
}
```

```typescript
@Component({
  selector: 'app-some-component-with-form',
  template: `...` // our form is here
})
export class SomeComponentWithForm {
  public form: FormGroup;
  public movies: Array<Movie>;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.max(120)],
      favoriteMovies: [[]] /*
                we'll have a multiselect dropdown
                in our template to select favorite movies
                */
    });
  }

  public onSubmit(values: User) {
    /*
      now we will just create a new User instance from our form,
      with all the data manipulations done inside the constructor
    */
    let user: UserModel = new UserModel(values);
    // then we will send the user model data to the server using some service
  }
}
```

### Topic 3

Using Pipes

**Avoid** -

```typescript
@Component({
  selector: 'some-component',
  template: `
    <div>
      <dropdown-component [options]="weightUnits"></dropdown-component>
      <input type="text" placeholder="Price" />
      <dropdown-component [options]="slashedWeightUnits"></dropdown-component>
      <-- Now this one's labels will be preceded with a slash -->
    </div>
  `
})
export class SomeComponent {
  public weightUnits = [
    { value: 1, label: 'kg' },
    { value: 2, label: 'oz' }
  ];
  public slashedWeightUnits = [
    { value: 1, label: '/kg' },
    { value: 2, label: '/oz' }
  ];
  // we just add a new property
}
```

```typescript
@Component({
  selector: 'some-component',
  template: `
    <div>
      <dropdown-component [options]="weightUnits"></dropdown-component>
      <input type="text" placeholder="Price" />
      <dropdown-component [options]="slashedWeightUnits"></dropdown-component>
      <-- Now this one's labels will be preceded with a slash -->
    </div>
  `
})
export class SomeComponent {
  public weightUnits = [
    { value: 1, label: 'kg' },
    { value: 2, label: 'oz' }
  ];
  public get slashedWeightUnits() {
    return this.weightUnits.map((weightUnit) => {
      return {
        label: '/' + weightUnit.label,
        value: weightUnit.value
      };
    });
  }
  // so now we map existing weight units to a new array
}
```

**Recommended** -

```typescript
@Pipe({
  name: 'map'
})
export class Mapping implements PipeTransform {
  /*
  this will be a universal pipe for array mappings. You may add more
  type checkings and runtime checkings to make sure it works correctly everywhere
  */
  transform(value, mappingFunction: Function) {
    return mappingFunction(value);
  }
}

@Component({
  selector: 'some-component',
  template: `
    <div>
      <dropdown-component [options]="weightUnits"></dropdown-component>
      <input type="text" placeholder="Price" />
      <dropdown-component [options]="weightUnits | map: slashed"></dropdown-component>
      <-- This will do the job -->
    </div>
  `
})
export class SomeComponent {
  public weightUnits = [
    { value: 1, label: 'kg' },
    { value: 2, label: 'oz' }
  ];

  public slashed(units) {
    return units.map((unit) => {
      return {
        label: '/' + unit.label,
        value: unit.value
      };
    });
  }
  // we will delegate a custom mapping function to a more generic pipe, which will just call it on value change
}
```

## Git

- Give compliments or call out things you learn while reviewing

export interface IUtilsDescription {
  title: string;
  desc: string;
  code: string;
}
export const utilsExamples: IUtilsDescription[] = [
  {
    title: 'as const ',
    desc: 'Preserve literal types, type inference, and use as an alternative to enums.',
    code: `
  // Define routes with 'as const' for literal types
  const routes = {
    home: '/',
    admin: '/admin',
    users: '/users',
  } as const;

  // Infer the type of 'routes' object
  type TypeOfRoutes = typeof routes;

  // Function to navigate to a specific route
  const goToRoute = (route: TypeOfRoutes[keyof TypeOfRoutes]) => {
    console.log('Navigating to:', route);
    // Actual navigation logic goes here
  };

  // Call the 'goToRoute' function
  goToRoute(routes.admin); // Navigating to: /admin
  goToRoute(routes.users); // Navigating to: /users

  // 'as const' preserves literal types, providing type safety
  // Similar effect to enums but with more flexibility
  // TypeOfRoutes is inferred as:
  // type TypeOfRoutes = {
  //   readonly home: "/";
  //   readonly admin: "/admin";
  //   readonly users: "/users";
  // };
  `,
  },
  {
    title: 'keyof & typeof',
    desc: `Explore the basics of TypeScript's keyof and typeof operators through a practical example showcasing secure property access and value assignment.`, code: `
      // Define an object
      const car = {
        make: 'Toyota',
        model: 'Camry',
        year: 2022,
      } as const;
  
      // Access a property using keyof and typeof
      type CarKey = keyof typeof car; // Type: 'make' | 'model' | 'year'
      type CarProperty = typeof car[CarKey]; // Type: 'Toyota' | 'Camry' | 2022
  
      // Usage
      const carKey: CarKey = 'make'; // Allowed values: 'make', 'model', 'year'
      const carProperty: CarProperty = car[carKey]; // Type inference based on carKey
  
      console.log('Car Property:', carProperty);
      `,
  },
  {
    title: 'Extending keyof & typeof',
    desc: `Learn how to safely extend an object's properties while maintaining type safety using TypeScript's keyof and typeof operators.`,
    code: `
      // Base object
      const basePerson = {
        name: 'Alice',
        age: 30,
      } as const;
  
      // Extending the base object
      const extendedPerson = {
        ...basePerson,
        city: 'Wonderland',
      } as const;
  
      // Utility function to access property from object
      function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
      }
  
      // Usage
      const name = getProperty(extendedPerson, 'name'); // Type: 'Alice'
      const age = getProperty(extendedPerson, 'age');   // Type: 30
      const city = getProperty(extendedPerson, 'city'); // Type: 'Wonderland'
  
      console.log('Name:', name);
      console.log('Age:', age);
      console.log('City:', city);
      `,
  }
  ,
  {
    title: 'Partial<Type>',
    desc: 'Make all properties of an object optional.',
    code: `
  interface User {
    id: number;
    name: string;
    email: string;
  }
  
  function updateUser(user: User, updates: Partial<User>): User {
    return { ...user, ...updates };
  }
  
  const user: User = { id: 1, name: 'Alice', email: 'alice@example.com' };
  const updates = { name: 'Alice Smith' };
  const updatedUser = updateUser(user, updates);
  console.log(updatedUser); // { id: 1, name: 'Alice Smith', email: 'alice@example.com' }
  `,
  },
  {
    title: 'Readonly<Type>',
    desc: 'Make all properties of an object readonly.',
    code: `
  interface User {
    readonly id: number;
    name: string;
    email: string;
  }
  
  function getUserById(id: number): Readonly<User> {
    return { id, name: 'Alice', email: 'alice@example.com' };
  }
  
  const user = getUserById(1);
  user.name = 'Bob'; // Error: Cannot assign to 'name' because it is a read-only property.
  `,
  },
  {
    title: 'Required<Type>',
    desc: 'Make all properties of an object required.',
    code: `
    interface User {
      id?: number;
      name?: string;
      email?: string;
    }
    
    function createUser(user: Required<User>): void {
      console.log(user.id, user.name, user.email);
    }
    
    const user = { id: 1, name: 'Alice', email: 'alice@example.com' };
    createUser(user); // OK
    
    const incompleteUser = { name: 'Bob' };
    createUser(incompleteUser); // Error: Property 'id' is missing in type '{ name: string; }' but required in type 'Required<User>'.
    `,
  },
  {
    title: 'Pick<Type, Keys>',
    desc: 'Create a type containing a subset of the properties of another type.',
    code: `
    interface User {
      id: number;
      name: string;
      email: string;
      isAdmin: boolean;
    }
    
    type UserWithoutAdmin = Pick<User, 'id' | 'name' | 'email'>;
    
    const user: UserWithoutAdmin = { id: 1, name: 'Alice', email: 'alice@example.com' };
    console.log(user); // { id: 1, name: 'Alice', email: 'alice@example.com' }
    `,
  },
  {
    title: 'Exclude<Type, Excluded>',
    desc: 'Exclude from a type all properties that are assignable to a specified type.',
    code: `
    type Pet = 'cat' | 'dog' | 'bird';
    type Wild = 'lion' | 'tiger' | 'bear';
    type Animals = Pet | Wild;
    
    type Domestic = Exclude<Animals, Wild>;
    
    const pets: Domestic[] = ['cat', 'dog', 'bird'];
    console.log(pets); // ['cat', 'dog', 'bird']
    `,
  },

  {
    title: 'Omit<Type, Keys>',
    desc: 'Create a type that omits a subset of the properties of another type.',
    code: `
    interface User {
      id: number;
      name: string;
      email: string;
      isAdmin: boolean;
    }
    
    type UserWithoutAdmin = Omit<User, 'isAdmin'>;
    
    const user: UserWithoutAdmin = { id: 1, name: 'Alice', email: 'alice@example.com' };
    console.log(user); // { id: 1, name: 'Alice', email: 'alice@example.com' }
    `,
  },
  {
    title: 'Record<Keys, Type>',
    desc: 'Create a type with a set of properties as keys and a specified type as the value.',
    code: `
    type Animal = 'cat' | 'dog' | 'bird';
    type Sound = 'meow' | 'woof' | 'tweet';
    
    type Sounds = Record<Animal, Sound>;
    
    const sounds: Sounds = {
      cat: 'meow',
      dog: 'woof',
      bird: 'tweet',
    };
    
    console.log(sounds); // { cat: 'meow', dog: 'woof', bird: 'tweet' }

    //use key as type property

    interface Book {
        title: string;
        author: string;
      }
      
      const books: Record<string, Book> = {
        '978-1408894624': { title: 'Harry Potter and the Philosopher's Stone', author: 'J.K. Rowling' },
        '978-0316015844': { title: 'Twilight', author: 'Stephenie Meyer' },
        '978-1501175466': { title: 'The Handmaid's Tale', author: 'Margaret Atwood' },
      };
      
      const book = books['978-1408894624'];
      console.log(book.title); // 'Harry Potter and the Philosopher's Stone'
    `,
  },
  {
    title: 'ReturnType<Type>',
    desc: 'Get the return type of a function type.',
    code: `
        function getUser(id: number): { id: number; name: string; email: string } {
          // Implementation omitted for brevity.
          return { id, name: 'Alice', email: 'alice@example.com' };
        }
        
        type User = ReturnType<typeof getUser>;
        
        const user: User = { id: 1, name: 'Alice', email: 'alice@example.com' };
        console.log(user); // { id: 1, name: 'Alice', email: 'alice@example.com' }
        `,
  },
  {
    title: 'Parameters<Type>',
    desc: 'Get the parameter types of a function type as a tuple.',
    code: `
    function createUser(name: string, email: string): { id: number; name: string; email: string } {
      // Implementation omitted for brevity.
      return { id: 1, name, email };
    }
    
    type CreateUserParams = Parameters<typeof createUser>;
    
    const params: CreateUserParams = ['Alice', 'alice@example.com'];
    console.log(params); // ['Alice', 'alice@example.com']
    `,
  },
  {
    title: 'NonNullable<Type>',
    desc: 'Create a type that removes null and undefined from a union type.',
    code: `
    type User = { id: number; name: string; email?: string } | null | undefined;
    type NonNullableUser = NonNullable<User>;
    
    const user: NonNullableUser = { id: 1, name: 'Alice' };
    console.log(user); // { id: 1, name: 'Alice' }
    `,
  },
];

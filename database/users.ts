import  bcrypt  from 'bcrypt';


 const initialUser = [
    {
        name: 'Alice',
        email: 'alice@example.com',
        password: 'password1',
        role: 'admin'
      },
      {
        name: 'Bob',
        email: 'bob@example.com',
        password: 'password2',
        role: 'client'
      },
      {
        name: 'Charlie',
        email: 'charlie@example.com',
        password: 'password3',
        role: 'client'
      },
      {
        name: 'Dave',
        email: 'dave@example.com',
        password: 'password4',
        role: 'client'
      }
]


export const hashedUsers = Promise.all(initialUser.map(async (user) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  return { ...user, password: hashedPassword };
}));


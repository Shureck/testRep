db.auth('root', 'root')

db = db.getSiblingDB('my_db')

db.createUser({
  user: 'david',
  pwd: 'IloveU',
  roles: [
    {
      role: 'root',
      db: 'admin',
    },
  ],
});
db.createUser(
    {
        user: "root-user",
        pwd: "secret",
        roles: [
            {
                role: "readWrite",
                db: "todo-database"
            }
        ]
    }
)
const jsUser = {
    name: 'waqar',
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
    jsUser.greeting = function()
{
    console.log(`hello js user ${this.name}`)
}
  console.log(jsUser.greeting()) 
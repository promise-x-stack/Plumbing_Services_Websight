type UserName = {
    user:string
}

export function NavBar({user}:UserName){
    const nav:string = `${user}`;
    console.log(nav)
}

// Explain decorator



// 1. Class Decorator Factory
function LogClass(prefix: string) {
    return function (target: Function, context: ClassDecoratorContext) {
        console.log(`[${prefix}]: Class "${context.name}" has been loaded.`)
    };
}

// 2. Property Decorator (Stage 3)
function LogProperty(prefix: string) {
    return function (target: undefined, context: ClassFieldDecoratorContext) {
        return function (initialValue: any) {
            console.log(`[${prefix}] Property "${String(context.name)}" is defined with value:`, initialValue)
            return `Md. ${initialValue}`;
        };
    };
}

// 3. Method Decorator Factory
function LogMethod(prefix: string) {
    return function (target: Function, context: ClassMethodDecoratorContext) {
        return function (this: any, ...args: any[]) {
            console.log(`[${prefix}] Method "${String(context.name)}" called with args:`, args);

            const result = target.apply(this, args);

            console.log(`[${prefix}] Method "${String(context.name)}" finished. Return value:`, result);
            return result;
        };
    };
}

@LogClass("SYSTEM")
class UserManager {
    @LogProperty("DATABASE")
    name: string = "rakib";

    @LogMethod("INFO")
    getUserInfo(id: number) {
        return { id, name: this.name, status: "Active" };
    }
}

const user = new UserManager();
user.getUserInfo(1)


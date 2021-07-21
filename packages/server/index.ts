import { nanoid } from 'nanoid';

export function helloWorld(name: string): string {
    return `Hello world to ${name} with uniqueID: ${nanoid()}`
}

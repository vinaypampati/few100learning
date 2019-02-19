import { formatName } from "./utils";
import * as _ from 'lodash';
describe('functions', () => {
    describe('syntax for creating them', () => {
        it('declaring them', () => {
            // named function
            function add(a: number, b: number) {
                return a + b;
            }
            expect(add(3, 3)).toBe(6);

            // Anonymous functions
            // -- an anonymous function that i immediately invoke
            expect((function (a, b) { return a / b; })(10, 5)).toBe(2);
            //expect((function (a, b) { return a / b; })(10, 5)).toBe(2) 

            const multiply = function (a: number, b: number) { return a * b; };
            expect(multiply(3, 3)).toBe(9);

            const divide = (a: number, b: number) => a / b;
            expect(divide(10, 2)).toBe(5);

            const logIt = (msg: string) => {
                msg = msg.toUpperCase();
                console.log(msg);
                return true;
            };
            logIt('Fun with Functions!');
        });

        describe('higher order functions', () => {
            // a higher order function is a function that takes as a argument one or more functions and/or  returns a function
            it('first example', () => {
                const answer = formatName('Han', 'Solo', makeItUpper);
                expect(answer).toBe('SOLO, HAN');

                const answer2 = formatName('Han', 'Solo', (x: string) => `***${x}***`);
                expect(answer2).toBe('***Solo, Han***');

                function makeItUpper(what: string) {
                    return what.toUpperCase();
                }
            });

            it('a way to do it that doesn\'t seem crazy', () => {
                // <h1>Hello</h1>
                //  tag, content
                // straight ahead procedural function type thing.
                function makeElement(tag: string, content: string) {
                    return `<${tag}>${content}</${tag}>`;
                }

                expect(makeElement('h1', 'Hello')).toBe('<h1>Hello</h1>');
                expect(makeElement('p', 'the story')).toBe('<p>the story</p>');
            });

            it('you could try oop', () => {
                class ElementMaker {
                    tag: string;
                    constructor(tag: string) {
                        this.tag = tag;
                    }
                    make(content: string) {
                        return `<${this.tag}>${content}</${this.tag}>`;
                    }
                }
                const h1Maker = new ElementMaker('h1');
                expect(h1Maker.make('Hello')).toBe('<h1>Hello</h1>');
                expect(h1Maker.make('Big!')).toBe('<h1>Big!</h1>');
            });

            it('a higher-order functions version', () => {
                function tagMaker(tag: string) {
                    return (content: string) => `<${tag}>${content}</${tag}>`
                }
            });
        });
    });

    describe('some lodash goodness', () => {
        it('supports memoization', () => {
            function doSomeHardWork() {
                console.log('Doing Hard Work Here!');
                return 'Work Is Done!';
            }


        });
    });
});
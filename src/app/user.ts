export class Users {
    constructor(
        public login: string,
        // tslint:disable-next-line: variable-name
        public html_url: string,
        public name: string,
        // tslint:disable-next-line: variable-name
        public public_repos: number,
        public followers: number,
        // tslint:disable-next-line: variable-name
        public public_gists: number,
        public following: number) { }
}

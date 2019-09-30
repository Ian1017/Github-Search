export class Repo {
    constructor(
        public login: string,
        // tslint:disable-next-line: variable-name
        public public_repos: number,
        public followers: number,
        public following: number
    ) { }
}

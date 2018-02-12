// Type definitions for vote-profile x.x
// Project: https://github.com/thirdcreed/vote-profile
// Definitions by: James Tooley <https://github.com/RealTYPICAL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7.1

export = Profile;

declare class Profile {

    constructor(systems?: string[]);

    public setAlternatives(alternatives: string[]): void;

    public find(ordering: string[]): Profile.Vote[];

    public vote(ballot: (string | string[])[]): void;

    public each(visitFunc: (ordering: string[], voteValue: number, index: number) => void): void;

    public extend(addOn: string): void;

    public score(scoreMethod: string): {[key: string]: number};

}
declare namespace Profile{
    export interface Vote {
        key: string;
        ordering: string[];
        numVotes: number;
    }
}
// Type definitions for vote-profile 0.0
// Project: https://github.com/thirdcreed/vote-profile
// Definitions by: James Tooley <https://github.com/RealTYPICAL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

export = Profile;

declare class Profile {
    constructor(systems?: string[]);

    setAlternatives(alternatives: string[]): void;

    find(ordering: string[]): Profile.Vote[];

    vote(ballot: Array<(string | string[])>): void;

    each(visitFunc: (ordering: string[], voteValue: number, index: number) => void): void;

    extend(addOn: string): void;

    score(scoreMethod: string): {[key: string]: number};
}
declare namespace Profile {
    interface Vote {
        key: string;
        ordering: string[];
        numVotes: number;
    }
}

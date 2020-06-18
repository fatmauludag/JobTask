const MIN_DISTANCE = 2;
const MIN_SUBSET_LENGTH = 2;

function PrintNonAdjacentSubsetsToConsole(...array: number[]) {
    var subsets: number[][] = Array.from(GetNonAdjacentSubsets(...array));
    var maxSum = Number.NEGATIVE_INFINITY;

    console.log("AltKüme\t\tToplam")
    for (const subset of subsets) {
        var sum = subset.reduce((a, b) => a + b, 0);
        console.log(`[${subset}]\t\t${sum}`);
        if (sum > maxSum) maxSum = sum;
    }

    console.log('En büyük toplam ' + maxSum + ' olur.');
}

function GetNonAdjacentSubsets(...array: number[]): number[][] {
    return Array.from(GetNonAdjacentSubsetsAsIterator([], ...array));
}

function* GetNonAdjacentSubsetsAsIterator(partialSubset: number[] = [], ...array: number[]): any {
    for (let index = 0; index < array.length; index++) {
        const value = array[index];
        // Create a temporary subset with current value plus previous subset if exists.
        const subset = [...partialSubset, value];

        // If subset item length is valid.
        if (subset.length >= MIN_SUBSET_LENGTH)
            yield subset; // Return valid subset

        // Break loop if there is no further item on distance.
        if (array.length < MIN_DISTANCE)
            break;

        // Continue loop if there is no further item on distance.
        if (array.length <= index + MIN_DISTANCE)
            continue;

        // Get rest of the array according to current position and distance.
        var skippedArray = array.slice(index + MIN_DISTANCE);

        // Recurse rest of the array with current subset.
        yield* GetNonAdjacentSubsetsAsIterator(subset, ...skippedArray)
    }
}

export { GetNonAdjacentSubsets, GetNonAdjacentSubsetsAsIterator, PrintNonAdjacentSubsetsToConsole }
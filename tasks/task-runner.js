// create "add" function for Runner class
// concurrent limit in constructor will determine the number of task Runner can run in parallel
// If the concurrent limit is reached by Runner, rest of the tasked should be queued and only to be executed once the first set of task are completed


class Runner {
    constructor(concurrent) {
        this.limit = concurrent;
        this.currentExecutionCounter = 0;
        this.queue = [];
    }

    add(task) {
        if (this.currentExecutionCounter < this.limit) {
            console.log('Running in concurrent mode');
            ++this.currentExecutionCounter;

            task().then((result) => {
                    --this.currentExecutionCounter;
                    if (this.currentExecutionCounter < this.limit) {
                        this.checkQueue();
                    }
                }
            )
        } else {
            console.log('Putting task  in the queue');
            this.queue.push(task);
        }
    }

    checkQueue() {
        console.log('Checking queue');

        if (this.queue.length && this.currentExecutionCounter < this.limit && this.currentExecutionCounter > 0) {
            const firstTaskInTheQueue = this.queue.shift();

            ++this.currentExecutionCounter;

            firstTaskInTheQueue().then((result) => {
                    --this.currentExecutionCounter;
                    this.checkQueue()
                }
            )
        }
    }
}

function task(x) {
    return function () {
        return new Promise((resolve, _) => {
            setTimeout(() => {
                console.log('Task completed:', x);
                resolve();
            }, 2000);
        })
    }
}

runner = new Runner(3);

runner.add(task(2));
runner.add(task(2));
runner.add(task(2));

runner.add(task(4));
runner.add(task(4));
runner.add(task(4));

runner.add(task(6));

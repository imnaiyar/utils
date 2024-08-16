const core = require('@actions/core');

async function run() {
    try {
        const prs = JSON.parse(core.getInput('prs'));

        const releaseNotes = {
            features: [],
            fixes: [],
            chore: [],
            refactor: [],
            misc: []
        };

        prs.forEach(pr => {
            const title = pr.title;
            const type = title.match(/^(\w*)\:/)?.[1] || 'misc';
            const category = releaseNotes[type] || releaseNotes.misc;
            category.push(`- ${title} by ${pr.user.login}`);
        });

        const notes = Object.entries(releaseNotes)
            .filter(([type, changes]) => changes.length > 0)
            .map(([type, changes]) => `## ${type.toUpperCase()}\n${changes.join('\n')}`)
            .join('\n\n');

        core.setOutput('notes', notes);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
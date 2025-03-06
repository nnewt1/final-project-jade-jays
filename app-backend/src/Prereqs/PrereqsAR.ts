export default function findreqAR(courseID: string) {
    for (let i = 0; i < Prereqs.length; i++) {
        if (courseID === Prereqs[i].courseID) {
            return Prereqs[i].reqs;
        }
    }
    return [];
}

const Prereqs = [
    {
        courseID: "AR 205X",
        reqs: [
            [
                { id: "AR 1101", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "AR 220X",
        reqs: [
            [
                { id: "AR 2202", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "AR 405X",
        reqs: [
            [
                { id: "IMGD 2101", req: "recomended" },
                { id: "AR 2101", req: "recomended" },
            ],
            [
                { id: "IMGD 3201", req: "recomended" },
                { id: "AR 3201", req: "recomended" },
            ],
        ],
    },
];
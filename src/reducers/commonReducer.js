import * as actions from "../actions/fieldsActions";

const initialState = {
    education: [
        {
            id: 1,
            data: {
                institute: "LNM Institute of Information Technology",
                affiliation: "B.Tech-CSE",
                score: "7.33 / 10.0",
            },
        },
        {
            id: 2,
            data: {
                institute: "Jayshree Periwal High School, Jaipur",
                affiliation: "12th-CBSE",
                score: "84.80 / 100.00",
            },
        },
        {
            id: 3,
            data: {
                institute: "Warren Academy School, Jaipur",
                affiliation: "10th-CBSE",
                score: "95.00 / 100.00",
            },
        },
    ],

    info: [
        {
            data: {
                name: "Nishchay Vashistha",
                phone: "+91-9672988857",
                email: "18ucs114@lnmiit.ac.in",
                address: "Jaipur, Rajasthan, India - 302021",
            },
        },
    ],

    skills: [
        { id: 1, data: { skill: "Python" } },
        { id: 2, data: { skill: "Data Structures Algorithms" } },
        { id: 3, data: { skill: "C++" } },
        { id: 4, data: { skill: "Android Development" } },
        { id: 5, data: { skill: "MySQL" } },
        { id: 6, data: { skill: "Object-Oriented Programming" } },
    ],

    projects: [
        {
            id: 1,
            data: {
                title: "DashCode Andriod App",
                description: `A dashboard for competitive programmers. 

A user can monitor his progress on different competitive programming platforms (such as CodeForces, CodeChef) in a single app. The app also shows a list of upcoming contests on these websites. 

The app was built from scratch by me using MVVM architecture and uses the latest Android libraries (Recycler Views, Data Binding, Retrofit, Room Database) and design principles (Repository, Factory design). The app fetches user's performance data from multiple REST APIs for different platforms and adapts it to be presented in graphs to deliver a consistent UI for all platforms. The data is cached in an offline database so that it doesn't need to be loaded every time the app is launched. The app also uses another API to get a list of upcoming contests from all major platforms. `,

                link: "https://github.com/nishchay-v/DashCode",
                keySkills:
                    "Android Development, Andriod Studio, Kotlin, XML, RESTful API",
            },
        },
    ],

    codeforces: [
        {
            data: {
                handle: "",
            },
        },
    ],
};

export default function commonReducer(state = initialState, action) {
    switch (action.type) {
        case actions.EDIT_FIELDS:
            return {
                ...state,
                [action.payload.section]: action.payload.newState,
            };
        default:
            return state;
    }
}

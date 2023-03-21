import workchurn from "../../assets/work-churn.svg";
import workeda from "../../assets/work-eda.svg";
import workdeep from "../../assets/work-deep.svg";
import workfilter from "../../assets/work-filter.svg";
import workmango from "../../assets/work-mango.svg";
import workweb from "../../assets/work-web.svg";

const Menu = [
    {
        id: 1,
        image: workchurn,
        title: "Customer Retention Analysis for Music Streaming Services",
        desc:[
            "Leveraged big data technologies like PySpark and ML libraries like Spark MLlib to model the factors affecting customer churn decisions using google cloud platform.",
            "Created a dashboard in tableau and a prediction application using flask and streamlit to deploy the best model."
        ],
        category: ["Machine Learning & Data Science"],
        url: "https://manasikhandekar9-eecs6893-bda-project-app-iayhdr.streamlit.app/",
        repositoryUrl: "https://github.com/Sapphirine/202212-29-Customer-Retention-Analysis-for-Music-Streaming-Services"
    },
    {
        id: 2,
        image: workeda,
        title: "Exploratory Data Analysis Project",
        desc:[
            "Exploratory Data Analysis was conducted on used car dataset from kaggle using python, matplotlib and seaborn"
        ],
        category: ["Machine Learning & Data Science"],
        url: "https://github.com/manasikhandekar9/EDA-Used-Car",
        repositoryUrl: "https://github.com/manasikhandekar9/EDA-Used-Car"
    },
    {
        id: 3,
        image: workdeep,
        title: "Deepfake Detection using Neural Networks",
        desc:[
            "Synthesized a dataset of 40 videos featuring people of Indian descent.",
            "Trained and finetuned available pre-trained models leveraging Python and Google Colab with close to 99% accuracy.",
            "Developed a simple GUI in Python to demonstrate the project as a whole system."
        ],
        category: ["Machine Learning & Data Science"]
    },
    {
        id: 4,
        image: workweb,
        title: "AICVS Website for Cummins College",
        desc:[
            "Leveraged HTML, CSS, Js and Django framework to build the AICVS club website.",
            "Delegated work to team members to maintain the website up-to-date with latest event updates and blogs about different sessions during the year, resulting in 15% increased participation from students in the various sessions organized."
        ],
        category: ["Full Stack"],
        url: "https://aicvsweb.pythonanywhere.com/",
        repositoryUrl: "https://github.com/mgkhandekar/aicvs"
    },
    {
        id: 5,
        image: workmango,
        title: "Mango Mood App (Coursera Project)",
        desc:[
            "A simple UX design project to create a web application - Mango Mood for buying mangoes online."
        ],
        category: ["UI/UX"],
        url: "https://concrete-booth-156.notion.site/Mango-Delivery-App-A-Case-Study-2f303a8e6080403e9a3a59ca8b00f96c",
        repositoryUrl: "https://concrete-booth-156.notion.site/Mango-Delivery-App-A-Case-Study-2f303a8e6080403e9a3a59ca8b00f96c"
    },
    {
        id: 6,
        image: workfilter,
        title: "Filter for Speech Signal Processing",
        desc:[
            "As part of college course work, designed a filter to filter out noise of a particular frequency from speech file using MATLAB."
        ],
        category: ["Signal Processing"]
    }
];

export default Menu;

function PigDetails({ greased, specialty, weight, highestMedalAchieved }) {
    return(
        <section>
            <p>{greased ? "Greased" : "Not Greased"} - {specialty} - {weight} - {highestMedalAchieved}</p>
        </section>
    )
};

export default PigDetails

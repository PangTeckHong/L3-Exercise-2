import React, { useState } from "react";
import { StyleSheet, Image, Text, View, Alert, ScrollView, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const AnimalApp = ({ picture, answer, ansSelect }) => {
    // State to hold selected user type
    const [animal, setAnimal] = useState('');

    const checkSelect = (value) => {
        setAnimal(value);
        ansSelect(value === answer);
    };
    return (
        <View style={styles.container} >
            <Image source={picture} style={styles.picture} />
            <Text style={styles.questionBox}>What is the animal?</Text>
            <RNPickerSelect
                onValueChange={checkSelect}
                items={[
                    { label: 'Bee', value: 'bee' },
                    { label: 'Dear', value: 'dear' },
                    { label: 'Crocodile', value: 'crocodile' },
                    { label: 'Owl', value: 'owl' },
                    { label: 'Elephant', value: 'elephant' },
                ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    picture: {
        width: 400,
        height: 390,
        borderWidth: 2,
    },
    container: {
        borderWidth: 2,
        marginVertical: 20,
        alignItems: 'center',

    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize:30
    },
    scrollContainer: {
        paddingVertical: 20,
        alignContent: 'center',
        flexDirection: 'column',
    },
    questionBox: {
        borderWidth: 2,
        backgroundColor: 'steelblue',
        paddingVertical: 6,
        paddingHorizontal: 100,
        margin: 5,
        fontWeight: 'bold',
        letterSpacing: 1,
        color: 'white',
        fontSize: 19
    },
    button: {
        marginEnd: 10,
    }
})

const ShowImg = () => {

    const [results, setResults] = useState([]);

    const answer = (isCorrect) => {
        setResults((prevResults) => [...prevResults, isCorrect]);
    };

    const checkAnswers = () => {

        const totalQuestions = 5;
        const correctAnswersCount = results.filter(result => result).length;
        const incorrectAnswersCount = totalQuestions - correctAnswersCount;

        if (results.length === 5 && results.every((result) => result)) {
            Alert.alert("All Answers are correct!");
        }
        else {
            Alert.alert(`You have ${incorrectAnswersCount} wrong answer(s)!`);
        }
    };

    return (
        <ScrollView style={styles.scrollContainer}>
            <View>
                <Text style={styles.header}>ANIMAL QUIZ</Text>
            </View>
            <AnimalApp picture={require('./img/bee.jpg')} answer="bee" ansSelect={answer} />
            <AnimalApp picture={require('./img/deer.jpg')} answer="dear" ansSelect={answer}/>
            <AnimalApp picture={require('./img/crocodile.jpg')} answer="crocodile" ansSelect={answer}/>
            <AnimalApp picture={require('./img/owl.jpg')} answer="owl" ansSelect={answer}/>
            <AnimalApp picture={require('./img/elephant.jpg')} answer="elephant" ansSelect={answer}/>
            <View style={styles.button}>
                <Button
                    onPress={checkAnswers}
                    title="SUBMIT ANSWER"
                />
            </View>
        </ScrollView>
    );
};

export default ShowImg;

import React, { useState } from "react";
import { Image, Text, View, Alert, ScrollView, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const AnimalApp = ({ picture, answer, ansSelect }) => {
    // State to hold selected user type
    const [animal, setAnimal] = useState('');

    const checkSelect = (value) => {
        setAnimal(value);
        ansSelect(value === answer);
    };
    return (
        <View style={{ marginBottom: 20 }}>
            <Image source={picture} style={{ width: 400, height: 400 }} />
            <Text>What is the animal?</Text>
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
        <ScrollView>
            <AnimalApp picture={require('./img/bee.jpg')} answer="bee" ansSelect={answer} />
            <AnimalApp picture={require('./img/deer.jpg')} answer="dear" ansSelect={answer}/>
            <AnimalApp picture={require('./img/crocodile.jpg')} answer="crocodile" ansSelect={answer}/>
            <AnimalApp picture={require('./img/owl.jpg')} answer="owl" ansSelect={answer}/>
            <AnimalApp picture={require('./img/elephant.jpg')} answer="elephant" ansSelect={answer}/>
            <Button
                onPress={checkAnswers}
                title="SUBMIT ANSWER"
            />
        </ScrollView>
    );
};

export default ShowImg;

import {FlatList, Text, View, StyleSheet} from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import {GlobalStyles} from "../constants/styles";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2022-12-19')
    },
    {
        id: 'e2',
        description: 'A pair of jeans',
        amount: 88.43,
        date: new Date('2022-11-13')
    },
    {
        id: 'e3',
        description: 'Nu jeans e na magliett',
        amount: 129.99,
        date: new Date('2022-12-11')
    },
    {
        id: 'e4',
        description: 'Past e fasul',
        amount: 28.99,
        date: new Date('2022-02-11')
    },
    {
        id: 'e5',
        description: 'TV',
        amount: 2333.99,
        date: new Date('2022-08-07')
    }
]

function ExpensesOutput({expenses, expensesPeriod}) {
    return (
        <View style={sytles.container}>
          <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
           <ExpensesList expenses={DUMMY_EXPENSES}/>
        </View>
    );
}

export default ExpensesOutput;

const sytles = StyleSheet.create({
   container: {
       flex: 1,
       padding: 24,
       backgroundColor: GlobalStyles.colors.primary700
   }
});
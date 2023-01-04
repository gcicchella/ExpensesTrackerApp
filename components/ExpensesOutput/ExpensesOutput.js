import {View, StyleSheet} from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import {GlobalStyles} from "../../constants/styles";

function ExpensesOutput({expenses, expensesPeriod}) {
    return (
        <View style={sytles.container}>
          <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
           <ExpensesList expenses={expenses}/>
        </View>
    );
}

export default ExpensesOutput;

const sytles = StyleSheet.create({
   container: {
       flex: 1,
       paddingHorizontal: 24,
       paddingTop: 24,
       paddingBottom: 0,
       backgroundColor: GlobalStyles.colors.primary700
   }
});
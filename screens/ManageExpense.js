import {StyleSheet, TextInput, View} from "react-native";
import {useContext, useLayoutEffect} from "react";
import IconButton from "../UI/IconButton";
import {GlobalStyles} from "../constants/styles";
import Button from "../UI/Button";
import {ExpensesContext} from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

function ManageExpense({route, navigation}){
    const expensesCtx = useContext(ExpensesContext);

    const editExpenseId = route.params?.expenseId;
    const isEditing = !!editExpenseId;

    const selectedExpense = expensesCtx.expenses.find(
        (expense) => expense.id === editExpenseId
    );

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

    function deleteExpenseHandler() {
        expensesCtx.deleteExpense(editExpenseId);
        navigation.goBack();
    }

    function cancelHandler(){
        navigation.goBack();
    }

    function confirmHandler(expenseData){
        if (isEditing){
            expensesCtx.updateExpense(editExpenseId, expenseData);
        }
        else {
            expensesCtx.addExpense(expenseData);
        }
        navigation.goBack();
    }

    return (
       <View style={styles.container}>
           <ExpenseForm
               submitButtonLabel={isEditing ? 'Update' : 'Add'}
               onSubmit={confirmHandler}
               onCancel={cancelHandler}
               defaultValues={selectedExpense}
           />
           {isEditing && (
               <View style={styles.deleteContainer}>
                   <IconButton
                       icon="trash"
                       color={GlobalStyles.colors.primary500}
                       size={36}
                       onPress={deleteExpenseHandler}
                   />
               </View>
           )}
       </View>
    );
}

export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    deleteContainer: {
        marginTop: 16,
        padding: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }
});
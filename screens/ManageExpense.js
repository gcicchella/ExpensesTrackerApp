import {Text} from "react-native";
import {useLayoutEffect} from "react";

function ManageExpense({route, navigation}){
    const editExpenseId = route.params?.expenseId;
    const isEditing = !!editExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

    return (
        <Text>ManageExpense Screen</Text>
    );
}

export default ManageExpense;
import {Text, StyleSheet, View} from "react-native";
import {useLayoutEffect} from "react";
import IconButton from "../UI/IconButton";
import {GlobalStyles} from "../constants/styles";

function ManageExpense({route, navigation}){
    const editExpenseId = route.params?.expenseId;
    const isEditing = !!editExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

    function deleteExpenseHandler() {

    }
    return (
       <View style={styles.container}>
           {isEditing &&
               <View style={styles.deleteContainer}>
                   <IconButton
                       icon="trash"
                       color={GlobalStyles.colors.primary500}
                       size={36}
                       onPress={deleteExpenseHandler}
                   />
               </View>
           }
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
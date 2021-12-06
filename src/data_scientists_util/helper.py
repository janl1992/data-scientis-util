def is_in_num_columns(name, columns_to_check):
    for column in columns_to_check:
        if name == column:
            return True
    return False


# This function takes the column names of a pandas dataframe and the processed columns of a sklearn pipeline. It then generates
# the original order of columns of the dataframe.
def get_ordered_columns(original_features, processed_columns):
    ordered_columns = []
    # We can not use sets because sets are not ordered
    for feature in original_features:
        is_present = is_in_num_columns(feature, processed_columns)
        if not is_present:
            ordered_columns.append(feature)

    processed_columns_cp = processed_columns.copy()
    processed_columns_cp.extend(ordered_columns)
    return processed_columns_cp
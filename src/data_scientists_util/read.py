import pandas as pd
import joblib
import json

def read_model(name, path='../models'):
    model = joblib.load("{}/{}.pkl".format(path, name))
    if model is not None:
        return model

    raise FileNotFoundError

def read_pre_processed_data(path='../pre_processed_input', data_type_dict='data_format.json'):
    with open('{}/{}'.format(path, data_type_dict)) as f:
        type_dict = json.load(f)

    X_train = pd.read_csv('{}/train.csv'.format(path), dtype=type_dict)
    Y_train = pd.read_csv('{}/train_target.csv'.format(path), dtype=type_dict)
    X_valid = pd.read_csv('{}/validation.csv'.format(path), dtype=type_dict)
    Y_valid = pd.read_csv('{}/validation_target.csv'.format(path), dtype=type_dict)
    X_test = pd.read_csv('{}/test.csv'.format(path), dtype=type_dict)

    return X_train, Y_train, X_valid, Y_valid, X_test
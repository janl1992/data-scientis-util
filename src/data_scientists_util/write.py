import json
from datetime import datetime
import pandas as pd
import csv

def write_output(predicted_outcome, input_dir='../input', submission_dir='../submission'):
    t = pd.read_csv('{}/train.csv'.format(input_dir))
    dump = [int(element) for index, element in enumerate(predicted_outcome, start=len(t))]
    now = datetime.now()
    filename = '{}/submission-{}-{}-{}_{}-{}-{}.csv'.format(submission_dir, now.year, now.month, now.day, now.hour,
                                                            now.minute, now.second)
    with open(filename, 'w', newline='') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(('id', 'sales'))
        writer.writerows((index, element) for index, element in enumerate(dump, start=len(t)))

    return filename

def write_data_format_dictionary(X_train, path='../pre_processed_input', data_type_dict='data_format.json'):
    target_dict = {key: value.name for key, value in zip(X_train.columns, X_train.dtypes)}
    with open('{}/{}'.format(path, data_type_dict), 'w') as data_dict:
        json.dump(target_dict, data_dict)

def write_model(grid_search, type='best_estimator', path='../best_models'):
    now = datetime.now()
    date_time = now.strftime("%m_%d_%Y-%H%M%S")

    model_name = str(round(grid_search.best_score_, 5)).replace('.', ',')
    joblib.dump(grid_search.best_estimator_, "%s/%s-%s-%s.pkl" % (path, model_name, type, date_time))

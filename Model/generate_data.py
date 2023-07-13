'''
1. pip install faker
2. python make_random_things.py
It will create three JSON files that can be imported into mongo using mongoimport.
'''
from faker import Faker
import json
import random

faker = Faker()
Faker.seed(1)

projects_file_name = "projects.json"
projects = []

tasks_file_name = "tasks.json"
tasks = []

def make_projects(number_of_projects_to_create: int) -> None:
    '''
    Create a bunch of fake projects
    '''
    for i in range(number_of_projects_to_create):
        project = {
            'id': i,
            'team_size':random.randint(1, 10),
            'budget': round(random.uniform(1000.00, 20000.00), 2),
            'workload':random.choice(['light', 'medium', 'heavy']),
            'completion_time':str(random.randint(1, 10)) + ' days',
        }
        projects.append(project)

    with open(projects_file_name, 'w') as file:
        file.write(json.dumps(projects, indent=2))



def make_tasks(number_of_tasks_to_create: int) -> None:
    '''
    Create a bunch of fake taks
    '''
    for i in range(number_of_tasks_to_create):
        task = {
            'id': i,
            'team_size':random.randint(1, 10),
            'budget': round(random.uniform(1000.00, 20000.00), 2),
            'workload':random.choice(['light', 'medium', 'heavy']),
            'completion_time':str(random.randint(1, 10)) + ' days',
        }
        tasks.append(task)

    with open(tasks_file_name, 'w') as file:
        file.write(json.dumps(tasks, indent=2))

# def make_products(number_of_products_to_create: int = 10) -> None:
#     '''
#     Create a bunch of fake products
#     '''
#     for i in range(number_of_products_to_create):
#         product = {
#             'id': i+100,
#             'name': ' '.join(faker.words(2)).capitalize(),   # Two words
#             'description': faker.paragraph(nb_sentences=5),  # ~ 5 sentences
#             'price': round(random.uniform(5.00, 38.99), 2),
#             'quantity_on_hand': faker.random_int(0, 30),
#         }
#         products.append(product)

#     with open(products_file_name, 'w') as file:
#         file.write(json.dumps(products, indent=2))


# def make_orders(number_of_orders_to_create: int) -> None:
#     '''
#     Create a bunch of fake orders
#     '''
#     def get_order_lines():
#         order_lines = []
#         for i in range(random.randint(1, 6)):
#             line = {"product": random.choice(products),  # Gets a random element
#                     "quantity": random.randint(1, 5)}
#             order_lines.append(line)
#         return order_lines
#     for i in range(number_of_orders_to_create):
#         order = {
#             'id': i+100,
#             'customer': random.choice(customers),
#             'lines': get_order_lines(),
#             # isoformat() to convert to a string b/c dates aren't JSON serializable.
#             'order_date': faker.date_between(start_date='-10d', end_date='today').isoformat()
#         }
#         orders.append(order)

#     with open(orders_file_name, 'w') as file:
#         file.write(json.dumps(orders, indent=2))


# Make all the data
# make_products(30)
# make_orders(250)

make_projects(5)

print("Data was created")

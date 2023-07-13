'''
1. pip install faker
2. python make_random_things.py
It will create three JSON files that can be imported into mongo using mongoimport.
'''
from faker import Faker
import json
import random
from datetime import datetime

faker = Faker()
Faker.seed(1)

projects_file_name = "projects.json"
projects = []

tasks_file_name = "tasks.json"
tasks = []
task_descriptions=[  "Conduct user interviews to gather feedback and insights for product improvement.",  "Analyze market trends and customer preferences to identify new business opportunities.",  "Develop and implement a social media marketing strategy to enhance brand visibility.",  "Coordinate and execute a product launch event to generate buzz and drive sales.",  "Design and develop a mobile application to enhance customer engagement and user experience.",  "Lead and manage a team of developers to deliver software solutions within set deadlines.",  "Conduct financial analysis and forecasting to support strategic decision-making.",  "Optimize website performance and user interface to increase conversion rates.",  "Create and manage a content calendar for consistent and targeted communication.",  "Implement project management software to streamline workflows and enhance collaboration.",  "Develop and execute a customer retention program to improve loyalty and reduce churn.",  "Conduct usability testing and iterate on product design based on user feedback.",  "Coordinate and negotiate contracts with suppliers to secure favorable terms and pricing.",  "Perform data cleansing and data validation to ensure data integrity and accuracy.",  "Develop and implement an employee training program to enhance skills and productivity.",  "Conduct competitor analysis to identify market gaps and develop a competitive advantage.",  "Design and implement a customer relationship management (CRM) system for efficient sales management.",  "Lead and facilitate brainstorming sessions to generate innovative ideas for process improvement.",  "Conduct market segmentation analysis to tailor marketing campaigns to specific customer groups.",  "Develop and implement a sustainability initiative to reduce environmental impact.",  "Manage and optimize pay-per-click (PPC) advertising campaigns to drive website traffic.",  "Conduct project retrospectives to capture lessons learned and improve future project outcomes.",  "Design and deliver presentations to stakeholders to communicate project progress and results.",  "Implement data visualization techniques to present complex information in a clear and concise manner.",  "Conduct product pricing analysis to ensure competitive and profitable pricing strategies.",  "Develop and maintain a project risk register to proactively manage potential risks.",  "Coordinate and oversee user acceptance testing to validate system functionality.",  "Lead and manage a business process reengineering project to improve operational efficiency.",  "Conduct employee satisfaction surveys to identify areas for employee engagement and improvement.",  "Develop and execute a digital marketing campaign to increase online brand presence.",  "Manage and optimize inventory levels to minimize carrying costs and stockouts.",  "Conduct market research to identify target demographics and refine marketing messaging.",  "Develop and implement a customer feedback mechanism to capture insights for product enhancement.",  "Coordinate and manage logistics for events, including venue selection and vendor coordination.",  "Analyze website analytics data to identify areas for website optimization and improved user experience.",  "Conduct user training sessions to ensure effective and efficient use of software applications.",  "Develop and implement an agile project management framework to increase project adaptability.",  "Lead and facilitate focus groups to gather consumer insights and preferences.",  "Design and implement a data backup and recovery plan to ensure business continuity.",  "Conduct A/B testing to optimize website design and increase conversion rates.",  "Manage and resolve project conflicts or issues to ensure project continuity.",  "Develop and implement a supply chain management strategy to optimize efficiency and reduce costs.",  "Coordinate and manage international business expansion projects to enter new markets.",  "Conduct a SWOT analysis to assess internal strengths and weaknesses and external opportunities and threats.",  "Develop and implement key performance indicators (KPIs) to track project success and performance.",  "Lead and manage a customer service improvement initiative to enhance customer satisfaction.",  "Create and deliver training programs to enhance employees' leadership and management skills.",  "Coordinate and manage the development and launch of a new product line.",  "Analyze and optimize email marketing campaigns to improve open rates and click-through rates.",  "Conduct data mining and analysis to identify patterns and trends for informed decision-making.",  "Develop and execute a branding strategy to establish a strong brand identity.",  "Coordinate and oversee the implementation of an enterprise resource planning (ERP) system.",  "Conduct performance evaluations and provide feedback to team members.",  "Design and implement a data governance framework to ensure data quality and compliance.",  "Coordinate and manage the implementation of a customer loyalty program.",  "Develop and execute a search engine optimization (SEO) strategy to improve website visibility.",  "Manage and coordinate the production and delivery of marketing collateral materials.",  "Conduct stakeholder analysis to identify key project stakeholders and their needs.",  "Develop and implement a crisis management plan to mitigate potential business risks.",  "Coordinate and facilitate requirements gathering workshops to elicit project requirements.",  "Develop and implement a diversity and inclusion initiative to foster an inclusive workplace culture.",  "Conduct financial modeling and analysis to support investment decisions.",  "Lead and manage a data migration project to transfer data to a new system.",  "Design and implement a performance management system to monitor and evaluate employee performance.",  "Coordinate and manage the implementation of a customer relationship management (CRM) system.",  "Conduct market forecasting and trend analysis to inform business strategies.",  "Develop and implement an employee wellness program to promote health and well-being.",  "Coordinate and oversee the development and execution of a multi-channel marketing campaign.",  "Conduct user interface (UI) testing to ensure intuitive and user-friendly software design.",  "Develop and execute a corporate social responsibility (CSR) initiative to support social and environmental causes.",  "Coordinate and manage the implementation of a business intelligence (BI) system.",  "Conduct training needs assessments to identify skill gaps and training requirements.",  "Design and implement a customer segmentation strategy for personalized marketing.",  "Coordinate and oversee the execution of a customer satisfaction survey to gather feedback.",  "Develop and implement a data privacy policy to ensure compliance with data protection regulations.",  "Conduct contract negotiations with clients or vendors to establish mutually beneficial agreements.",  "Manage and optimize the project resource allocation to ensure efficient utilization.",  "Coordinate and manage the development and implementation of a learning management system (LMS)."]

def make_projects(number_of_projects_to_create: int) -> None:
    '''
    Create a bunch of fake projects
    '''
    for i in range(number_of_projects_to_create):

        def get_task():
            project_tasks = []
            for i in range(random.randint(1, 4)):
                task = {"task": random.choice(tasks)}
                project_tasks.append(task)
            return project_tasks

        project = {
            'id': i,
            'team_size':random.randint(1, 10),
            'budget': round(random.uniform(1000.00, 20000.00), 2),
            'workload':random.choice(['light', 'medium', 'heavy']),
            'completion_time':str(random.randint(1, 10)) + ' weeks',
            'project_tasks': get_task()
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
            'description':random.choice(task_descriptions),
            'completed_status':random.choice([True, False]),
            # 'person_assigned':,
            'due_date':faker.date_this_year().strftime("%m/%d/%Y"),
            'estimated_duration':str(random.randint(1, 7)) + ' days',
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

make_tasks(10)
make_projects(10)

print("Data was created")

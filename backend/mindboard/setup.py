from setuptools import setup

setup(
    name='mindboard',
    packages=['mindboard'],
    include_package_data=True,
    install_requires=[
        'flask',
        'flask-restful',
        'flask-pymongo',
        'flask-cors',
        'flask_login',
        'facebook',
        'werkzeug'
    ],
)

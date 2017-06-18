from mindboard.mindboard import app, api, mongo
from flask_restful import Resource, reqparse
from flask import jsonify
from flask_cors import cross_origin
from bson.objectid import ObjectId
import uuid
from werkzeug.security import check_password_hash, generate_password_hash

def create_dic(cursor):
    k = []
    for doc in cursor:
        k.append({key: (str(value) if key == "_id" else value)
                  for key, value in doc.items()})
    return k


class HelloWorld(Resource):

    def get(self):
        return {'hello': 'world'}

'''
    This class manage the User API
    return JSON
'''


class LoginApi(Resource):
    # Get session access info

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('email', type=str, required=True)
        parser.add_argument('password', type=str, required=True)
        args = parser.parse_args()

        message = {}
        user = mongo.db.user.find_one(
            {"email": args.email})

        if user is not None:
            if check_password_hash(user['password'], args.password):
                # user_obj = models.User(str(user["_id"]), user[
                #                        'email'], args.role)
                # login_user(user_obj)
                user["_id"] = str(user["_id"])
                message = {"status": 200, "code": 1, "user": user["_id"]}
            else:
                message = {"status": 200, "code": 2}
        else:
            message = {"status": 500, "code": 0}

        return jsonify(message)

# User API
# return JSON
class UserApi(Resource):

    # Get by id
    def get(self, id=None):
        user = mongo.db.user.find_one({"_id": ObjectId(id)})
        return jsonify(user)

    # Sinin User
    # This class manage the user SignIn API
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str, required=True)
        parser.add_argument('email', type=str, required=True)
        parser.add_argument('password', type=str, required=True)
        parser.add_argument('birth_day', type=str, required=False)
        parser.add_argument('type', type=str, required=True)

        args = parser.parse_args()
         #  Verify if user exists
        cursor = mongo.db.user.find_one({"email": args.email})
        if cursor is None:
            id = str(uuid.uuid4()).replace('-', '')
            password = generate_password_hash(args.password)
            # Create new user
            mongo.db.user.insert_one({
                "user_id": id,
                "name": args.name,
                "email": args.email,
                "password": password,
                "auth": {
                    "type": "basics"
                },
                "birth_day": "",
                "profile_photo" : "",
                "type" : args.type,
                "hobbies" : [],
                "payment_data" : {
                    "type" : "",
                    "stripe_id" : "",
                    "membership" : ""
                },
                "interest_topic" : [],
                "bio" : "",
                "nacionality" : "",
                "living_state" : "",
                "living_country" : ""
            })
            # Create message after adding user
            message = {
                "status": 201
            }
        else:
            # User already exists
            message = {
                "status": 500
            }

        return jsonify(message)


api.add_resource(HelloWorld, '/')
api.add_resource(LoginApi, '/api/v0/login')
api.add_resource(UserApi, '/api/v0/user', '/api/v0/user/<id>')

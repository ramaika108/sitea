from flask import Blueprint
from flask import g
from flask import request
from flask import jsonify
from werkzeug.exceptions import abort

from flaskr.utils.calculate_total_pages import calculate_total_pages 

from flaskr.models.blohs import Bloh, BlohSchema, Category, CategorySchema

bp = Blueprint("bloh", __name__)

#ROUTES

@bp.route("/blohs", methods=['GET'])
def blohs():
    category = request.args.get('category')
    page = request.args.get('page')
    
    try: 
        page = int(page)
    except: 
        page = 1
    if category:
        blohs = get_blohs_by_category(category, page)
    else:
        blohs = get_blohs(page)

    return jsonify(blohs), 200

@bp.route("/blohs/<int:id>", methods=['GET'])
def bloh(id):
    post = get_bloh(id)
    return jsonify(post), 200

@bp.route("/bloh-categories", methods=['GET'])
def categories():
    categories = get_categories()
    return jsonify(categories), 200


#SQL FUNCTIONS
blohs_per_page = 3

def get_blohs(page):
    tmp = Bloh.query
    total_pages, page = calculate_total_pages(tmp, blohs_per_page, page)

    blohs = tmp.offset(blohs_per_page*page).limit(blohs_per_page)
    blohs_schema = BlohSchema(many=True)

    return {'blohs': blohs_schema.dump(blohs), 'pagination': {'total': total_pages, 'current': page + 1}}

def get_bloh(id):
    bloh = Bloh.query.filter_by(id=id).one()
    bloh_schema = BlohSchema()
    return bloh_schema.dump(bloh)

    if post is None:
        abort(404, f"Post id {id} doesn't exist.")

    return post

def get_blohs_by_category(category, page):
    tmp = Bloh.query.filter_by(category_id=category)
    total_pages, page = calculate_total_pages(tmp, blohs_per_page, page)

    blohs = tmp.offset(blohs_per_page*page).limit(blohs_per_page)
    blohs_schema = BlohSchema(many=True)
    return {'blohs': blohs_schema.dump(blohs), 'pagination': {'total': total_pages, 'current': page + 1}}
    

def get_categories():
    categories = Category.query.all()
    categories_schema = CategorySchema(many=True)
    return categories_schema.dump(categories)

from flaskr import db, ma
from marshmallow import fields

class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name  = db.Column(db.String)
    color = db.Column(db.String)
    __tablename__ = 'categories'

    def __repr__(self):
        return '<Category %s>' % self.title

class CategorySchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'color')


class Bloh(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))
    description = db.Column(db.String)
    main_img = db.Column(db.String)
    body = db.Column(db.String)
    creation_date = db.Column(db.String)
    author = db.Column(db.String)

    category = db.relationship('Category', backref='blohs', lazy=True, uselist=False)
    __tablename__ = 'blohs'

    def __repr__(self):
        return '<Bloh %s>' % self.title

class BlohSchema(ma.Schema):
    category = fields.Pluck(CategorySchema(), 'name')
    class Meta:
        fields = ('id', 'title', 'category_id', 'description', 'main_img', 'body', 'creation_date', 'author', 'category_name', 'category')

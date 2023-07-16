from flaskr import db, ma

class Humor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String)
    __tablename__ = 'humor_pump'

    def __repr__(self):
        return '<Humor %s>' % self.title

class HumorSchema(ma.Schema):
    class Meta:
        fields = ('id', 'body')


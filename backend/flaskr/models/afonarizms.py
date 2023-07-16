from flaskr import db, ma

class Afonarizm(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String)
    __tablename__ = 'afonarizms'

    def __repr__(self):
        return '<Afonarizm %s>' % self.title

class AfonarizmSchema(ma.Schema):
    class Meta:
        fields = ('id', 'body')


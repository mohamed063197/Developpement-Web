from django.http import Http404


class Post:
 

    @classmethod
    def all(cls):
        return cls.POSTS

    @classmethod
    def findById(cls,id):
        try:
            return cls.POSTS[int(id) - 1]
        except:
            raise Http404(f'L\'article #{id} n\'existe pas')
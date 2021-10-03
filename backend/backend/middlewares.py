# from channels.db import database_sync_to_async
# from django.contrib.auth.models import User
# from api.models import Log


# @database_sync_to_async
# def isAuthor(user: User, log_id: int):
#     """
#     Checks whether the given User object is the author of the Log with id of log_id.
#     Note that this cannot be used to determine whether log_id exists.
#     """

#     try:
#         log: Log = Log.objects.get(pk=log_id)
#     except Log.DoesNotExist:
#         return False

#     return user.pk == log.author


# class AuthorAuthMiddleware:
#     """
#     Custom middleware for specifying whether the current user is the author.
#     """

#     def __init__(self, app):
#         self.app = app

#     async def __call__(self, scope, receive, send):

#         # Because that AuthMiddleware already fetched user from database,
#         # we can directly do this
#         if 'user' in scope:
#             user: User = scope['user']

#             # Get the log id from the url
#             log_id: int = scope['url_route']['kwargs']['log_id']

#             scope['author'] = isAuthor(user, log_id)
#         else:
#             # By default, no user means it's not an author of any Log
#             scope['author'] = False

#         return await self.app(scope, receive, send)

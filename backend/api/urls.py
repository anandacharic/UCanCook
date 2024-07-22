from django.urls import path
from . import views
 
urlpatterns = [
    path("cuisines/",views.CuisineListCreate.as_view(),name="Cuisine_List"),
    path("cuisines/delete/<int:pk>/",views.CuisineDelete.as_view(),name="Cuisine-delete"),
    path("notes/",views.NoteListCreate.as_view(),name="Note-List"),
    path("notes/delete/<int:pk>/",views.NoteDelete.as_view(),name="Note-delete"),

]
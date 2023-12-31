from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from . import views

router = routers.DefaultRouter()
router.register(r'vacation', views.VacationplanViewSet, 'vacation')


urlpatterns = [
    path("api/v1/", include(router.urls)),
]

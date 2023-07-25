from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from travel import views

# Con rest_framerwork nos gener automaticamnte las peticiones
# Get,Post,Put,Delete
router = routers.DefaultRouter()
router.register(r'travel', views.TravelView, 'travel')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("docs", include_docs_urls(title="Travel API")),
]

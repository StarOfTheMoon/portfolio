from django.conf.urls import include, url
from django.conf.urls.i18n import i18n_patterns

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^projects/$', views.works, name='works'),
    url(r'^projects/(?P<work>[-\w]+)$', views.works, name='works'),
]

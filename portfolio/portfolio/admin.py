# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import Tag, Image, Project

# Register your models here.
admin.site.site_title = 'Portfolio Sarah Admin'
admin.site.site_header = 'Portfolio Sarah Admin'


#admin.site.register(Tag)
@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    fields = ('name',)

admin.site.register(Image)
admin.site.register(Project)
# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from .models import Tag, Image, Project

# Register your models here.
admin.site.site_title = 'Portfolio Sarah Admin'
admin.site.site_header = 'Portfolio Sarah Admin'

class LanguageTabbedAdmin(TranslationAdmin):
	class Media:
		js = (
			'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js',
			'https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js',
			'modeltranslation/js/tabbed_translation_fields.js',
		)
		css = {
			'screen': ('modeltranslation/css/tabbed_translation_fields.css',),
		}

class TagAdmin(LanguageTabbedAdmin):
	model = Tag
	fields = ('name','type','level',)

class TagInline(admin.TabularInline):
	extra = 0
	model = Project.tags.through
	verbose_name = u"Tag"
	verbose_name_plural = u"Tags"



class ProjectAdmin(LanguageTabbedAdmin):
	model = Project
	inlines = (
       TagInline,
    )
	exclude = ("tags", )

admin.site.register(Image)
admin.site.register(Tag, TagAdmin)
admin.site.register(Project, ProjectAdmin)


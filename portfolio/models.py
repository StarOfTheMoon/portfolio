# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.template.defaultfilters import slugify
from django.utils.translation import ugettext_lazy as _



# Create your models here.
class Image(models.Model):
	image = models.ImageField()

	def __str__(self):
		return (self.image)

class Tag(models.Model):
	name = models.CharField("Nom",max_length=100)
	slug = models.SlugField(default=None, null=True, blank=True)

	def __str__(self):
		return (self.name)

	@property
	def tagname(self):
		return "%s " % (self.name)

	def save(self, *args, **kwargs):
		self.slug = slugify(self.name)
		super(Tag, self).save(*args, **kwargs)

	class Meta :
		verbose_name = "Tag"
	
class Project(models.Model):
	title = models.CharField("titre",max_length=250)
	subtitle = models.CharField("sous titre", max_length=250, null=True, blank=True)
	description = models.CharField(max_length=450)
	img_header = models.ForeignKey(Image, related_name='imgheader')
	img_others = models.ManyToManyField(Image, related_name='imgothers', blank=True)
	tags = models.ManyToManyField(Tag, blank=True)
	link = models.URLField("lien", blank=True)

	def __str__(self):
		return (self.title)

	class Meta :
		verbose_name = "Projet"